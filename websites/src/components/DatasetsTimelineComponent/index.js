import React, { useState } from 'react';
import { SmileOutlined, FrownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {Timeline} from 'antd';


export const FeatureList=[
    {
        timestamp:'2022-11-01',
        color:'green',
        task:'IDEALIST OMOP database is ready for internal usage.',
        icon: <SmileOutlined />
    },
    {
        timestamp:'2023-02-20',
        color:'green',
        task:'Finish the OMOP mapping of Multimodal AI datasets',
        icon: <SmileOutlined />
    }, 
    {
        timestamp:'2023-09-30',
        color:'blue',
        task:'External Dataset OMOPatization: Start MIMIC V OMOP testing',
        icon: <ClockCircleOutlined />
    }, 
    {
        timestamp:'2023-10-20',
        color:'green',
        task:'Start testing Auditing and Data Quality Control tools',
        icon: <ClockCircleOutlined />
    }, 
    {
        timestamp:'2023-11-10',
        color:'blue',
        task:'Inpatient database (EHR) is ready for internal usage',
        icon: <SmileOutlined />
    }, 
]

function Feature({timestamp, color, task, icon}) {
    return (
        <Timeline.Item dot={icon} color = {color} style={{fontSize:'16px'}}>
            <strong>{timestamp} : </strong>
            <span>{task}</span>
        </Timeline.Item>
    );
  }

export default function TimelineComponent(){
    return (
        <>
            <Timeline mode="alternative">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
                ))
                }
            </Timeline>
        </>
    );
};