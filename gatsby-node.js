/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://github.com/silvenon/gatsby-plugin-linaria
// https://www.gatsbyjs.org/docs/add-custom-webpack-config/

const TS_RULE_TEST = "\\.tsx?$"

exports.onCreateWebpackConfig = ({
  actions,
  getConfig,
  rules,
  stage,
  loaders,
  plugins,
}) => {
  const config = getConfig()
  // const isDevelop = stage.startsWith("develop")
  const usingTS = config.module.rules.some(
    ({ test }) => test && test.source === TS_RULE_TEST
  )
  // const existingTsRule = config.module.rules.find(
  //   ({ test }) => test && test.source === TS_RULE_TEST
  // )

  const primitivesLoader = {
    loader: "chronstruct-primitives/loader",
    options: {
      autoImport: true,
    },
  }

  // const jsRule = {
  //   ...rules.js(),
  //   use: [primitivesLoader],
  // }
  const tsRule = usingTS && {
    test: new RegExp(TS_RULE_TEST),
    use: [primitivesLoader],
  }

  actions.setWebpackConfig({
    module: {
      rules: [/*jsRule,*/ tsRule].filter(Boolean),
    },
  })

  // const configAfter = getConfig()

  // configAfter.module.rules.forEach(rule => {
  //   console.log(rule)
  // })
}
