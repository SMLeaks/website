import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';
import constants from '../constants.mjs';


export default (options) => {
    return async (ast, file) => {
        visit(ast, 'ping', (node) => {
            node.type = 'credit-mention'
            let name = constants.contributors[node.username];
            if (!name) {
                file.message(
                    `Contributor Mention \`${node.username}\` not found in \`src/constants.mjs\`.`
                );
                name = `@${node.username}`
            }

            node.data = {
                hName: 'a',
                hProperties: {
                    href: node.url
                }
            }

            node.children = [
                u('text', { value: name  })
            ]
        })
    }
}