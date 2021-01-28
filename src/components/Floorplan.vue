<template>
  <div class="mx-auto relative grid place-items-stretch">
    <div class="tooltip absolute">{{ tooltipText }}</div>
    <svg width="1000" height="400">
      <g class="elements" />
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

const colorMap = {
  Drift: "#000",
  Dipole: "#FBBF24",
  Quadrupole: "#EF4444",
  Sextupole: "#10B981",
  Octupole: "#3B82F6",
};

export default {
  name: "Floorplan",
  data() {
    return {
      width: 500,
      height: 400,
      latticejson: null,
      container: null,
      tooltip: null,
      tooltipText: "",
    };
  },
  props: {
    lattice: Object,
  },
  computed: {
    flattened_lattice() {
      const flattened_lattice = [];
      const { root, lattices, elements } = this.latticejson;
      function helper(lattice) {
        for (const name of lattice) {
          if (name in lattices) {
            helper(lattices[name]);
          } else {
            flattened_lattice.push([name, elements[name]]);
          }
        }
      }
      helper(lattices[root]);
      return flattened_lattice;
    },
    d3Data() {
      const data = [];
      let angle_total = 0;
      let x2 = 0;
      let y2 = 0;
      for (const element of this.flattened_lattice) {
        const [name, [type, { length, angle }]] = element;
        angle_total += angle ?? 0;
        const x1 = x2;
        const y1 = y2;

        x2 = x1 + length * Math.cos(angle_total);
        y2 = y1 + length * Math.sin(angle_total);
        data.push({
          name,
          type,
          x1,
          y1,
          x2,
          y2,
          height: 0.5,
          width: length,
          angle: angle_total,
        });
      }
      return data;
    },
  },
  methods: {
    render() {
      // const width = parseInt(this.$el.style("width"));
      // const height = parseInt(this.$el.style("height"));
      const canvas = this.container.select("svg");
      const elementsGroup = canvas.select(".elements");
      const elements = elementsGroup.selectAll("rect").data(this.d3Data);
      const factor = 10;
      const scaleX = d3
        .scaleLinear()
        .domain([-this.width / 2 / factor, this.width / 2 / factor])
        .range([0, this.width]);
      const scaleY = d3
        .scaleLinear()
        .domain([-this.height / 2 / factor, this.height / 2 / factor])
        .range([0, this.height]);
      elements
        .enter()
        .append("line")
        .attr("x1", (element) => scaleX(element.x1))
        .attr("y1", (element) => scaleY(element.y1))
        .attr("x2", (element) => scaleX(element.x2))
        .attr("y2", (element) => scaleY(element.y2))
        .attr("stroke", (element) => colorMap[element.type])
        .attr("stroke-width", (element) => (element.type !== "Drift" ? 10 : 2))
        .on("mouseover", (event, element) => {
          this.tooltipText = element.name;
          return this.tooltip.style("visibility", "visible");
        });
      // .on("mousemove", (event, element) => {
      //   return this.tooltip
      //     .style("left", `${scaleX(element.x1)}px`)
      //     .style("top", `${scaleY(element.y1)}px`);
      // });
      // .on("mouseout", () => {
      //   return this.tooltip.style("visibility", "hidden");
      // });
    },
  },
  watch: {
    // d3Data() {
    //   render();
    // },
  },
  async mounted() {
    const response = await fetch(
      // `https://nobeam.github.io/lattice-summaries-lattices/${this.lattice.namespace}/${this.lattice.name}.json`
      `/generated/${this.lattice.namespace}/${this.lattice.name}.json`
    );
    this.latticejson = await response.json();
    this.container = d3.select(this.$el);
    const canvas = this.container.select("svg");
    function zoomed({ transform }) {
      canvas.select(".elements").attr("transform", transform);
    }
    canvas.call(
      d3
        .zoom()
        .extent([
          [0, 0],
          [this.width, this.height],
        ])
        .scaleExtent([0.25, 25])
        .on("zoom", zoomed)
    );
    this.tooltip = this.container.select(".tooltip");
    this.render();
  },
};
</script>