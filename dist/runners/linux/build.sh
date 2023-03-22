#!/bin/bash

# Move to project path
cd $PROJECT_PATH

if [[ ${DEBUG:+1} ]] ; then
  godot --headless --export-debug "$EXPORT_PRESET" $EXPORT_PATH/$EXPORT_NAME
else
  godot --headless --export-release "$EXPORT_PRESET" $EXPORT_PATH/$EXPORT_NAME
fi
