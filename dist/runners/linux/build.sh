#!/bin/bash

# Move to project path
cd $PROJECT_PATH

# Create export directory, if it doesn't exist
if [[ ! -d $EXPORT_PATH ]]; then
  mkdir -p $EXPORT_PATH
fi

# Export the game
if [[ ${DEBUG:+1} ]] ; then
  godot --headless --export-debug "$EXPORT_PRESET" $EXPORT_PATH/$EXPORT_NAME
else
  godot --headless --export-release "$EXPORT_PRESET" $EXPORT_PATH/$EXPORT_NAME
fi
