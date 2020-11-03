import React from "react";
import styled from "styled-components";
import Task from "./task";

const Contatiner = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Contatiner>
        <Title>{this.props.column.title}</Title>
        <TaskList>
          {this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
        </TaskList>
      </Contatiner>
    );
  }
}
