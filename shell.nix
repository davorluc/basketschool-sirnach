{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.typescript-language-server
    pkgs.vscode-langservers-extracted
    ];

  # Set environment variables for npm to use the local node_modules
  shellHook = ''
    export NPM_CONFIG_PREFIX=$(pwd)/.npm_packages
    export PATH=$NPM_CONFIG_PREFIX/bin:$PATH
  '';
}
