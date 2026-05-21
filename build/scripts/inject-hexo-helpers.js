const fs = require('fs')
const path = require('path')

const layoutFile = path.join(__dirname, '../../layout/index.ejs')

try {
    let content = fs.readFileSync(layoutFile, 'utf-8')

    const hasOpenGraph = content.includes('open_graph()')
    const hasTitleTag = content.includes('<title>')
    let injected = false
    let injectContent = ''

    if (!hasOpenGraph) {
        injectContent += '  <%- open_graph() %>\n'
    }
    if (!hasTitleTag) {
        injectContent += '  <title><%- page.title ? page.title + " | " + config.title : config.title %></title>\n'
    }

    if (injectContent) {
        content = content.replace(/<head>/, `<head>\n${injectContent}`)
        fs.writeFileSync(layoutFile, content)
        injected = true
    }

    if (injected) {
        const injectedHelpers = []
        if (!hasOpenGraph) injectedHelpers.push('open_graph()')
        if (!hasTitleTag) injectedHelpers.push('title tag')
        console.log(`✓ Injected ${injectedHelpers.join(' and ')}`)
    } else {
        console.log('✓ open_graph() helper and title tag already present')
    }
} catch (error) {
    console.error('Error injecting hexo helpers:', error.message)
    process.exit(1)
}
