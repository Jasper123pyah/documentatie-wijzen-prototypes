const path = require('path');

module.exports = {
    styleguideDir: 'dist',
    components: 'src/components/**/*.{jsx,tsx}',
    propsParser: (filePath, source, resolver, handlers) => {
        const {ext} = path.parse(filePath);
        return ext === '.tsx'
            ? require('react-docgen-typescript').withDefaultConfig([]).parse(
                filePath,
                source,
                resolver,
                handlers
            )
            : require('react-docgen').parse(source, resolver, handlers);
    },
};