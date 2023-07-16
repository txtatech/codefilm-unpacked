# codefilm-unpacked-chrome-extension

An unpacked browser extension for creating a re-sizable overlay for any open tab intended to aid in code comparison.

# CodeFilm Overlay Browser Extension

The CodeFilm Overlay browser extension is a JavaScript-based overlay that allows you to display and manipulate code snippets on top of web pages in the Brave or Chrome browsers. This extension provides a convenient way to view and interact with code while browsing the web.

## Features

The CodeFilm Overlay browser extension offers the following features:

1. Overlay Element: The overlay is a draggable and resizable container that displays code snippets on top of web pages.

2. Resizer Element: The resizer allows you to adjust the size of the overlay by dragging its edges.

3. Green Dot Element: A small green dot is displayed next to the code snippet for visual aaid in alignment.

4. Text Element: The text element displays the code snippet with customizable styling options such as font color, family, and size.

5. Toggle Button: The toggle button is used to show or hide the overlay. When the overlay is hidden, the button displays "Overlay," and when the overlay is shown, the button displays "Hide."

6. Fit Button: The fit button resizes the overlay to fit the dimensions of the browser tab, ensuring the code snippet is fully visible.

7. Dragging and Resizing: You can drag the overlay by clicking and dragging anywhere on the overlay while holding the Shift key. Resizing is achieved by clicking and dragging the resizer element.

8. Zooming: You can zoom in or out of the overlay using the mouse wheel. Zooming affects the size of the code snippet and the overlay.

9. Clipboard Integration: When the overlay is hidden, you can copy code from external sources and paste it into the browser's clipboard. Clicking the toggle button will automatically populate the overlay with the copied code.

10. Responsive Design: The overlay and code snippet automatically adjust their size to fit the browser window and maintain the code's readability.

## Installation

To use the CodeFilm Overlay browser extension, follow these steps:

1. Download or clone the extension's source code from the GitHub repository.

2. Open the Brave or Chrome browser and navigate to `chrome://extensions` or `brave://extensions`.

3. Enable the developer mode option, usually located in the top-right corner of the extensions page.

4. Click on the "Load unpacked" or "Load unpacked extension" button and select the folder containing the downloaded source code.

5. The extension should now be installed and visible in the browser's extensions menu.

6. Click the toggle button to show or hide the overlay. Use the fit button to resize the overlay to fit the browser tab.

## Usage

Once the CodeFilm Overlay browser extension is installed, you can use it as follows:

1. Displaying the Overlay:
   - Click the toggle button labeled "Overlay" to display the overlay.
   - The overlay will appear at the top left corner of the browser window.
   - If you have copied code to the clipboard, it will be automatically populated in the overlay.

2. Hiding the Overlay:
   - Click the toggle button labeled "Hide" to hide the overlay.
   - The overlay will disappear, and the code snippet will no longer be visible.

3. Dragging the Overlay:
   - Hold down the Shift key and click anywhere on the overlay.
   - While still holding the mouse button, move the mouse to drag the overlay to a desired position.

4. Resizing the Overlay:
   - Click and drag the resizer element, represented by a small red box located at the bottom right corner of the overlay.
   - Move the mouse to adjust the width and height of the overlay.

5. Zooming the Overlay:
   - Use the mouse wheel to zoom in or out of the overlay.
   - Scrolling up will zoom in, and scrolling down will zoom out.
   - Zooming affects the size of the code snippet and the overlay itself.

6. Fitting the Overlay to the Tab:
   - Click the fit button labeled "Fit to Tab."
   - The overlay will be resized to match the dimensions of the browser tab, ensuring the code snippet is fully visible.

## Customization

You can customize various aspects of the CodeFilm Overlay browser extension by modifying the provided code:

- Styling the Overlay: Adjust the appearance of the overlay by modifying the CSS properties of the `filmOverlay` element. Properties such as `backgroundColor`, `padding`, `flexDirection`, and `alignItems` can be changed to achieve the desired visual effect.

- Styling the Code Snippet: Modify the appearance of the code snippet by changing the CSS properties of the `text` element. Properties such as `color`, `fontFamily`, `fontSize`, `whiteSpace`, and `wordBreak` can be customized to match your preferences.

- Styling the Toggle and Fit Buttons: Customize the toggle and fit buttons by modifying the CSS properties of the `toggleButton` and `fitButton` elements. Properties such as `backgroundColor`, `color`, `border`, `padding`, `borderRadius`, `position`, `top`, `right`, and `zIndex` can be adjusted to change the buttons' appearance and positioning.

## Contributions

Contributions to the CodeFilm Overlay browser extension are welcome. If you have any suggestions, bug reports, or feature requests, please create a new issue on the GitHub repository.

## License

The CodeFilm Overlay browser extension is open-source software released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the extension in accordance with the terms of the license.

## Acknowledgments

The CodeFilm Overlay browser extension was developed by [Your Name]. Special thanks to the open-source community for their contributions and inspiration.

Please note that this extension was created for educational and experimental purposes and may not be suitable for production environments. Use it at your own risk.
