import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  // argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Task {...args} />;

// Template.bind({})
// 함수의 복사본을 만드는 표준 JavaScript의 한 기법
// 각각의 스토리가 고유한 속성(properties)을 갖지만 동일한 결과물을 사용
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
