export async function run(image: string, parameters: any, entryPoint): void {

}

export function getUnixCommand(imageTag: string, projectPath: string): string {
  return 'docker run \
    -w /github/workspace/ \
    -- rm \
    --env GITHUB_WORKSPACE=/github/workspace \
    --volume "${githubHome} ": " / root:z" \
    --volume "${githubWorkflow} ": " / github / workflow:z" \
    --volume "${workspace} ": " / github / workspace:z" \
    --volume "${actionFolder}/runners/linux/build.sh:/build.sh:z" \
    ${ image }'
}
