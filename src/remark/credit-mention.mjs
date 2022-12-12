import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';
import constants from '../constants.mjs';

/**
 * WARNING!!!!!
 * if you want to edit any of this and actually want to see the updated output you have to do 
 * `yarn clean` before `yarn start` or `yarn build` since docusaurus/webpack caches the mdx/remark ast
 */
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