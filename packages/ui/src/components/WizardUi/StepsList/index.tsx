import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Icon } from "semantic-ui-react";

import { PollStep } from "../../types";
import WizardPanel from "../WizardPanel";
import './styles.scss';

export type StepsListProps = {
  steps?: PollStep[];
  onDragEnd: (result: any) => void;
};

const ITEM_HEIGHT = 62;
const StepsListItem: React.FC<PollStep & {
  index: number;
  isExpanded: boolean;
  onExpand: React.MouseEventHandler;
}> = ({
  id, 
  title,
  type, 
  index, 
  isExpanded=false,
  onExpand,
  ...stepProps
}) => <Draggable
  draggableId={id}
  index={index}
>
      {
        (provided, snapshot) => (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className='steps-list-item'
          >
            <WizardPanel
              className='draggable-panel'
            >
              <span
                className='drag-handle'
                {...provided.dragHandleProps}
              >
                <Icon
                  name='ellipsis vertical'
                />
                <Icon
                  name='ellipsis vertical'
                />
              </span>
              <span className='title'>
                {title}
              </span>
              <span className='spacer' />
              <span className='type'>
                {type}
              </span>
              <Icon
                className='expand'
                name={isExpanded ? 'chevron up' : 'chevron down'}
                onClick={onExpand}
              />
            </WizardPanel>
            {
              isExpanded && <StepDetails
              id={id}
              title={title}
              type={type}
                {...stepProps}
              />
            }
          </div>
        )
      }
    </Draggable>

const StepDetails: React.FC<PollStep> = ({
  header
}) => <WizardPanel className='step-details'>
  {header}
</WizardPanel>

const StepsList: React.FC<StepsListProps> = ({
  steps = [],
  onDragEnd
}) => {
  const [expandedStep, setExpandedStep] = useState<number | undefined>();
  return <DragDropContext
    onDragEnd={onDragEnd}
  >
    <Droppable droppableId='steps-list'>
      {
        (provided, snapshot) => (
          <div
            className='steps-list'
            style={{
              minHeight: `${ITEM_HEIGHT * steps.length}px`
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {steps.map((step, i) => <StepsListItem
              key={step.id}
              index={i}
              isExpanded={i === expandedStep}
              onExpand={() => i === expandedStep ? setExpandedStep(undefined) : setExpandedStep(i)}
              {...step}
            />)}
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  </DragDropContext>;
}

export default StepsList;