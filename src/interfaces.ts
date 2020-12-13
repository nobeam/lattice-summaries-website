export interface State {
    info: Info
}

export interface Info {
    lattices: Array<Lattice>
}

export interface Namespace {
    name: string,
    lattices: Array<Lattice>
}

export interface Lattice {
    namespace: string,
    name: string,
    title: string,
    authors: Array<string>,
    machine: string,
    energy: number,
    simulations: Array<string>,
    labels: Array<string>,
    description: string
}
