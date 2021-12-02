{ pkgs }: {
  deps = [
    pkgs.libffi-dev
    pkgs.libffi 
    pkgs.php74
    haskellPackages.libffi
    haskellPackages.libffi-dev
    nixos.haskellPackages.libffi
    nixos.haskellPackages.libffi-dev
    nixos.libffi
    nixos.libffi-dev
    pkgs.nixos.libffi
    pkgs.nixos.libffi-dev
    pkgs.nixos.haskellPackages.libffi
    pkgs.nixos.haskellPackages.libffi-dev
  ];
}