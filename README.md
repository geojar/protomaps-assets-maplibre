# Protomaps Assets Maplibre

This repository is part of the **GeoJar Protomaps Stack**. It is used to **prebuild MapLibre assets** for use on websites. This repository contains the necessary configurations and scripts to prepare the MapLibre style files and other assets.

A full setup guide is available in the GitHub repository [geojar/protomaps-stack](https://github.com/geojar/protomaps-stack).

## Folder Structure

- **`src/`**: Contains source files including the style and configuration for MapLibre.
- **`public/`**: The final built and minified assets will be placed here after running the build process.

## Setup Instructions

### 1. Clone the Repository
Clone the repository to a local machine:

```bash
git clone https://github.com/geojar/protomaps-assets-maplibre.git
cd protomaps-assets-maplibre
```

### 2. Install Dependencies
Run the following command to install the necessary dependencies:

```bash
bash run_install.sh
```

### 3. Build the Assets
After installing dependencies, run the following command to build the assets:

```bash
bash run_build.sh
```

This process generates the MapLibre assets, including the minified `style.json` file, in the `public/` directory.

### 4. Update or Customize
To customize the asset URLs, the following files need to be updated:

- **Vite Config (base URL)**:
  Change the `base` URL in `vite.config.js` to match the desired environment:

  ```js
  base: 'https://maplibre-assets.geojar.com/',
  ```

- **`src/style.json`**:
  Modify the URLs in `src/style.json` to point to the appropriate tile, sprite, and glyph URLs:

  ```json
  "tiles": [
      "https://tiles.geojar.com/{z}/{x}/{y}.mvt"
  ],
  
  "sprite": "https://basemaps-assets.geojar.com/sprites/v4/light",
  "glyphs": "https://basemaps-assets.geojar.com/fonts/{fontstack}/{range}.pbf"
  ```

### 5. Deploy the Assets

Expose or upload the contents of the `public/` folder to the internet.  
For example, use **Cloudflare Pages** to host the directory as a static site.

### Bash Scripts

Available bash scripts:

- **`run_bash.sh`**: Opens a Docker container bash shell for interacting with the environment.
- **`run_build.sh`**: Runs the build process to generate the assets.
- **`run_install.sh`**: Runs `npm install` to install project dependencies.
- **`run_update.sh`**: Runs `npm update` to update the installed packages.

## Cloudflare Pages

After building the assets, **GeoJar** uses **Cloudflare Pages** to serve the contents of the `public/` directory. Cloudflare Pages offers a fast and secure method to deploy static websites and assets.

The content in the **`public/`** directory, including the minified style files and other assets, is uploaded to Cloudflare Pages for hosting, ensuring that the latest version of the assets is served.

---

### 🤖 AI-Assisted Content

Some parts of this project, especially the README and other documentation, were created or refined with the help of AI tools (such as ChatGPT). These tools were used to improve clarity, structure, and consistency in presenting the information. All generated content was reviewed and edited as needed to ensure accuracy and alignment with the project’s goals.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.