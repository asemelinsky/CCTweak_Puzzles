/**
 * Bootstrap: інжектує Blockly, готує level, wire'ить кнопки.
 */

'use strict';

let workspace;

function initApp() {
  // Мова Blockly вже завантажена через <script src=".../msg/uk.js">
  const toolboxXml = document.getElementById('toolbox');

  workspace = Blockly.inject('blockly-div', {
    toolbox: toolboxXml,
    trashcan: true,
    scrollbars: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 2.0,
      minScale: 0.5,
      scaleSpeed: 1.1,
    },
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
  });

  // Стартовий блок — приклад щоб учень зрозумів що робити
  const defaultXml = `
    <xml>
      <block type="turtle_forward" x="20" y="20"></block>
    </xml>
  `;
  Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(defaultXml), workspace);

  // Init level
  initLevel();

  // Wire buttons
  document.getElementById('btn-run').addEventListener('click', executeUserCode);
  document.getElementById('btn-reset').addEventListener('click', reset);
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').style.display = 'none';
  });

  // Resize handling
  const onResize = () => Blockly.svgResize(workspace);
  window.addEventListener('resize', onResize);
  onResize();
}

// Запустити коли DOM готовий
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
