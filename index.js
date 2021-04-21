const core = require('@actions/core')

core.setSecret("github")

console.log("github is cool!")
core.setOutput("some-output", "test")

core.startGroup("test_group")
core.error("Something went wrong!")
core.warning("Something went wrong but not really disastrous!")
core.endGroup()

core.exportVariable("TEST_VAR", "test")
core.addPath("some-path")
console.log(__dirname)
// core.setFailed("Fail :(")