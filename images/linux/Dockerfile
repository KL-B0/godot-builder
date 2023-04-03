ARG GODOT_VERSION
FROM klb0/godot:${GODOT_VERSION}

# Remove non-linux export templates
ARG GODOT_VERSION
RUN find ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable -type f -not -name 'linux*' -print0 | xargs -0 rm --

# Run editor once
RUN godot -e -q --headless --quit
