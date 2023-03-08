// 1. Create directory
// 2. Build project for plaform X

import * as core from '@actions/core';

function main() {
  try {
    console.log(core.getInput('godot-version'));
  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

main();
