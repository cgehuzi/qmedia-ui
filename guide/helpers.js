const fs = require('fs');
const path = require('path');

// const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
const ELEMENTS_DIR = path.resolve(__dirname, '../src/elements');

const findComponents = (dirPath) => {
  const name = path.basename(dirPath);
  const surnamePattern = new RegExp(`${name}[a-zA-Z]*.tsx`);
  const components = fs
    .readdirSync(dirPath)
    .filter((item) => surnamePattern.test(item))
    .map((item) => path.join(dirPath, item))
    .filter((item) => {
      const fileName = path.basename(item).replace('.tsx', '');
      const readme = path.join(dirPath, `${fileName}.md`);
      if (!fs.existsSync(readme)) return false;
      return true;
    });
  return components;
};

const findComponentsRecursively = (dirPath) => {
  if (!fs.statSync(dirPath).isDirectory()) {
    return [];
  }
  const components = [...findComponents(dirPath)];
  fs.readdirSync(dirPath).forEach((name) => {
    components.push(...findComponentsRecursively(path.join(dirPath, name)));
  });
  return components.filter(Boolean);
};

const findInComponents = (parentDirName) => {
  const sections = [];
  const components = [];
  fs.readdirSync(parentDirName).forEach((childDirName) => {
    const dirPath = path.join(parentDirName, childDirName);
    components.push(...findComponentsRecursively(dirPath));
  });
  return { components, sections };
};

const { sections: elementsSections, components: elementsComponents } = findInComponents(ELEMENTS_DIR);
// const { sections: componentsSections, components: componentsComponents } = findInComponents(COMPONENTS_DIR);

const getCommonSections = () => [
  {
    name: 'Getting Started',
    content: path.join(__dirname, '../src/README.md'),
  },
  {
    name: 'Styles',
    content: path.join(__dirname, '../src/styles/README.md'),
    sectionDepth: 2,
    sections: [
      {
        name: 'Customization',
        content: path.join(__dirname, '../src/styles/Customization.md'),
      },
      {
        name: 'Colors',
        content: path.join(__dirname, '../src/styles/Colors.md'),
      },
    ],
  },
  {
    name: 'Elements',
    content: path.join(__dirname, '../src/elements/README.md'),
    components: elementsComponents,
    sectionDepth: 2,
    sections: elementsSections,
  },
  // {
  //   name: 'Components',
  //   content: path.join(__dirname, '../src/components/README.md'),
  //   components: componentsComponents,
  //   sectionDepth: 2,
  //   sections: componentsSections,
  // },
].filter((section) => !section.content || fs.existsSync(section.content));

module.exports = {
  // components: componentsComponents,
  commonSections: getCommonSections(),
};
