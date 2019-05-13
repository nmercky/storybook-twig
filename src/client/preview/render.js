import { document, Node } from 'global';
import { stripIndents } from 'common-tags';

const rootElement = document.getElementById('root');

export default function renderMain({
  parameters = {},
  storyFn,
  selectedKind,
  selectedStory,
  showMain,
  showError,
  forceRender,
}) {
  const { html = {} } = parameters;
  const element = storyFn();

  showMain();

  const template = element[0]
  const vars = element[1] || {}
  rootElement.innerHTML = template(vars);

  // } else {
  //   showError({
  //     title: `Expecting an HTML snippet or DOM node from the story: "${selectedStory}" of "${selectedKind}".`,
  //     description: stripIndents`
  //       Did you forget to return the HTML snippet from the story?
  //       Use "() => <your snippet or node>" or when defining the story.
  //     `,
  //   });
  // }
}