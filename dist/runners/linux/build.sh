#!/bin/sh

if [[ $DEBUG ]]; then
  godot --headless --export-debug $EXPORT_PRESET $EXPORT_PATH
else
  godot --headless --export-release $EXPORT_PRESET $EXPORT_PATH
fi
