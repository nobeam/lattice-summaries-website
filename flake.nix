{
  description = "Lattice Summaries Website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      with nixpkgs.legacyPackages.${system};
      {
        devShell = mkShell {
          nativeBuildInputs = [ bashInteractive ];
          buildInputs = [
            nodejs-16_x
            nodePackages.pnpm
          ];
        };
      }
    );
}
