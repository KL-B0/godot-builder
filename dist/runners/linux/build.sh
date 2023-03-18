#!/bin/sh

# Export the game in release mode
if $DEBUG
godot --headless --export-debug $PRESET $EXPORT_PATH



godot --headless --export-release $PRESET $EXPORT_PATH
