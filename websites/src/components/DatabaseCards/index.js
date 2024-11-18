
import React from 'react';
import styles from './styles.module.css';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, Card, Divider } from 'antd';

// TODO: implement the codes to fetch statistics from Database through Next/Node backend

const FeatureList=[
    {
        title:'IDEALIST',
        description:'Surgical Patients admitted to UF Health (GNV+JAX)',
        updatedTime: '2024/07/30', 
        timeRange: '2012/01/01 - 2021/04/30',
        numPatients:115954,
        numEncounters:156564,
        numSurgeries:232805,
        isOMOP:'Enabled',
        link: '/ic3-online-documentation/docs/datasets/IDEALIST'
    },
    {
        title:'AKI EPIC 2',
        description:'Hospitalized Patients admitted to UF Health (GNV)',
        updatedTime: '2019/10/15', 
        timeRange: '2012/01/01-2019/08/22',
        numPatients:156699,
        numEncounters:529032,
        numSurgeries:221083,
        isOMOP:'Disabled',
        link:'/ic3-online-documentation/docs/datasets/AKIEPIC2',
    },
    {
        title:'UF INPATIENT DATABASE',
        description:'Hospitalized Patients admitted to UF Health (All Sites)', 
        updatedTime: '2024/06/07', 
        timeRange: '2012/01/01-2023/12/31',
        numPatients:191404,
        numEncounters:285339,
        numSurgeries: 636907,
        isOMOP:'Enabled',
        link:'/ic3-online-documentation/docs/datasets/InpatientDatabase'
    },
    {
        title:'ChoRUS',
        description:'Selected ICU Patients from Inpatient Database',
        updatedTime: '2024/07/30', 
        timeRange: 'Dynamic selection',
        numPatients:4000,
        numEncounters:5123,
        numSurgeries: 'N/A',
        isOMOP:'Enabled',
        link:'/ic3-online-documentation/docs/datasets/Chorus'
    },
]

function Feature({title, description, updatedTime, timeRange, numPatients, numEncounters, numSurgeries, isOMOP, link }) {
  const omopFlag = isOMOP.includes("Enabled");
  const icon = omopFlag?<SmileOutlined/>:<FrownOutlined/>;
 
    return (
      <div style={{'margin-right':'2rem', 'margin-top':'1rem'}}>
        <Card hoverable title={title} bordered={true} style={{width:425}} type='inner' extra=<a href={link}>Details</a>>
        <p>{description}</p>
        <Row gutter={16}>
            <Col span={10}>
            <Statistic title="Updated Time" value={updatedTime} valueStyle={{
              fontSize: 16
            }}/>
            </Col>
            <Col span={14}>
            <Statistic title="Time Range" value={timeRange} valueStyle={{
              fontSize: 16
            }}/>
            </Col>
        </Row>
       <Divider />
        <Row gutter={16}>
            <Col span={12}>
            <Statistic title="Num of patients" value={numPatients} />
            </Col>
            <Col span={12}>
            <Statistic title="Num of encounters" value={numEncounters} />
            </Col>
            <Col span={12}>
            <Statistic title="Number of surgeries" value={numSurgeries} />
            </Col>
            <Col span={12}>
            <Statistic title="OMOP version" value={isOMOP} prefix= {icon} valueStyle={{
              color: omopFlag? '#3f8600':'#cf1322',
            }} />
            </Col>
            <Col></Col>
        </Row>
        </Card>
      </div>
    );
  }
  //valueStyle={{color:{color,}}}
  
  export default function DatabaseCards() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))
            }
          </div>
        </div>
      </section>
    );
  }
  
