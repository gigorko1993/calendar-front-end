import styled from "styled-components";

const EventElement = styled.div.attrs((prop) => ({
  "data-task": prop.id,
}))`
  position: absolute;
  border-left: 1px solid #91b5da;
  padding-left: 2px;
  background-color: #e2ecf5;
  transform: translate(
    ${(prop) => prop.transformX}px,
    ${(prop) => prop.transform}px
  );
  height: ${(prop) => prop.height}px;
  width: ${(prop) => prop.width}px;
  start: ${(prop) => prop.start}px;
  duration: ${(prop) => prop.duration}px;
  title: ${(prop) => prop.title}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    button {
      opacity: 1;
    }
    white-space: normal;
    overflow: visible;
    background-color: #f2f5f8;
    font-size: 12px;
  }
  button {
    opacity: 0;
    font-size: 9px;
  }
`;
export default EventElement;
