import styled from "styled-components";

const EventElement = styled.div.attrs((props) => ({
  "data-task": props.id,
}))`
  position: absolute;
  border-left: 1px solid #91b5da;
  padding-left: 2px;
  background-color: #e2ecf5;
  transform: translateY(${(props) => props.transform}px);
  left: ${(props) => props.transformX}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  start: ${(props) => props.start}px;
  duration: ${(props) => props.duration}px;
  title: ${(props) => props.title}px;
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
