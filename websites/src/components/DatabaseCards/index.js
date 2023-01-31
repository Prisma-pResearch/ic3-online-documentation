
import React from 'react';
import styles from './styles.module.css';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, Card, Divider } from 'antd';

// TODO: implement the codes to fetch statistics from Database through Next/Node backend

const FeatureList=[
    {
        title:'IDEALIST',
        description:'2012-2020 Surgical Patients',
        numPatients:254979,
        numEncounters:498769,
        numSurgeries:545824,
        isOMOP:'Enabled',
        link: '/ic3-online-documentation/docs/datasets/IDEALIST'
    },
    {
        title:'AKI EPIC 2',
        description:'2012-2019 Hospitalized Patients',
        numPatients:156699,
        numEncounters:529032,
        numSurgeries:221083,
        isOMOP:'Disabled',
        link:'/ic3-online-documentation/docs/datasets/AKIEPIC2',
    },
    {
        title:'Multimodal AI',
        description:'2012-2027 Hospitalized Patients',
        numPatients:351022,
        numEncounters:14743767,
        numSurgeries:0,
        isOMOP:'Enabled',
        link:'/ic3-online-documentation/docs/datasets/MultimodalAI'
    },
    {
        title:'ChoRUS',
        description:'2022-2026 Hospitalized Patients',
        numPatients:0,
        numEncounters:0,
        numSurgeries:0,
        isOMOP:'Disabled',
        link:'/ic3-online-documentation/docs/datasets/Chorus'
    },
]

function Feature({title, description, numPatients, numEncounters, numSurgeries, isOMOP, link }) {
  const omopFlag = isOMOP.includes("Enabled");
  const icon = omopFlag?<SmileOutlined/>:<FrownOutlined/>;
  const wordColor = omopFlag?'#3f8600':'#cf1322';

    return (
      <div style={{'margin-right':'2rem', 'margin-top':'1rem'}}>
        <Card hoverable title={title} bordered={true} style={{width:400}} type='inner' extra=<a href={link}>Details</a>>
        <p>{description}</p>
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
              color: {wordColor}, // TODO: why not working ?
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
  