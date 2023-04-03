ARG GODOT_VERSION
FROM klb0/godot:${GODOT_VERSION}

ARG GODOT_VERSION

# Activate universe repository
# RUN sed -i '/<pattern>/s/^/#/g' /etc/apt/sources.list

# Install osslsigncode
RUN apt-get -q update \
  && apt-get -q install -y --no-install-recommends \
  osslsigncode \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Download linux export templates
RUN wget -q https://downloads.tuxfamily.org/godotengine/${GODOT_VERSION}/Godot_v${GODOT_VERSION}-stable_export_templates.tpz \
  && unzip -q Godot_v${GODOT_VERSION}-stable_export_templates.tpz \
  && mkdir -p ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable \
  && mv templates/* ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable \
  && rmdir templates \
  && rm Godot_v${GODOT_VERSION}-stable_export_templates.tpz

# Remove unrelated export templates
RUN find ~/.local/share/godot/export_templates/${GODOT_VERSION}.stable -type f -not -name 'windows*' -print0 | xargs -0 rm --

# Run editor once
RUN godot -e -q --headless --quit
