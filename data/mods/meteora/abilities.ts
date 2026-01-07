export const Abilities = {
  horrify: {
    onStart(this: Battle, pokemon: Pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add('-ability', pokemon, 'Horrify', 'boost');
          activated = true;
        }
        if (target.volatiles['substitute']) {
          this.add('-immune', target);
        } else {
          this.boost({spa: -1}, target, pokemon, null, true);
        }
      }
    },
    flags: {},
    name: "Horrify",
    rating: 3.5,
    num: -1001,
  },
  	 overwhelm: {
    onBasePower(this: Battle, basePower: number, attacker: Pokemon, defender: Pokemon, move: ActiveMove) {
      if (move.flags['contact']) {
        return this.chainModify(1.3);
      }
    },
    name: "Overwhelm",
    rating: 3,
    num: -1002,
  },
};

