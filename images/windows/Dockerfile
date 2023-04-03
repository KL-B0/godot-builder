ARG GODOT_VERSION
FROM klb0/godot:${GODOT_VERSION}

ARG GODOT_VERSION

# Install windows tools
RUN apt-get -q update \
  && apt-get -q install -y --no-install-recommends \
  osslsigncode \
  wine \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Download linux export templates
RUN wget -q https://downloads.tuxfamily.org/godotengine/${GODOT_VERSION}/Godot_v${GODOT_VERSION}-stable_export_templates.tpz \
  && unzip -q Godot_v${GODOT_VERSION}-stable_export_templates.tpz \
  && mkdir -p ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable \
  && mv templates/* ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable \
  && rmdir templates \
  && rm Godot_v${GODOT_VERSION}-stable_export_templates.tpz

# Download rcedit
RUN wget -q -P /opt/ https://github.com/electron/rcedit/releases/download/v1.1.1/rcedit-x64.exe

# Remove unrelated export templates
RUN find ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable -type f -not -name 'windows*' -print0 | xargs -0 rm --

# Configure windows tools
RUN echo 'export/windows/rcedit = "/opt/rcedit-x64.exe"' >> ~/.config/godot/editor_settings-4.tres \
  && echo 'export/windows/osslsigncode = "/usr/bin/osslsigncode"' >> ~/.config/godot/editor_settings-4.tres \
  && echo 'export/windows/wine = "/usr/bin/wine"' >> ~/.config/godot/editor_settings-4.tres
