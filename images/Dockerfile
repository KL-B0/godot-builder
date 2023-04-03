FROM ubuntu:jammy

# Set frontend to non-interactive
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Update dependencies
RUN apt-get -q update \
  && apt-get -q install -y --no-install-recommends \
  ca-certificates \
  libfontconfig-dev \
  unzip \
  wget \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ARG GODOT_VERSION

# Download executable
RUN wget -q https://downloads.tuxfamily.org/godotengine/${GODOT_VERSION}/Godot_v${GODOT_VERSION}-stable_linux.x86_64.zip \
  && unzip -q Godot_v${GODOT_VERSION}-stable_linux.x86_64.zip \
  && mv Godot_v${GODOT_VERSION}-stable_linux.x86_64 /usr/local/bin/godot \
  && rm Godot_v${GODOT_VERSION}-stable_linux.x86_64.zip

# Run editor once to generate the configuration
RUN godot -e -q --headless --quit
