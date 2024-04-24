import { Button, Col, Input, Row, Table } from "antd";
import React, { useState } from "react";
import GooglePieChart from './chart'


export default function Task() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [participation, setParticipation] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData([...data, { firstName, lastName, participation }]);
    setFirstName("");
    setLastName("");
    setParticipation("");
    console.log(data);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Participation",
      dataIndex: "participation",
      key: "participation",
    },
  ];

  return (
    <div>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          background: "#01B8E2",
          padding: "25px",
        }}
      >
        <Col span={2} />

        <Col span={4}>
          <Input
            type="text"
            value={firstName}
            placeholder="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col span={2} />

        <Col span={4}>
          <Input
            type="text"
            placeholder="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
        <Col span={2} />

        <Col span={4}>
          <Input
            type="number"
            min={0}
            max={100}
            variant="outlined"
            placeholder="Participation"
            value={participation}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                setParticipation(value);
              }
            }}
          />
        </Col>
        <Col span={2} />

        <Col span={4}>
          <Button type="primary" onClick={handleClick} >
            Send
          </Button>
        </Col>
      </Row>

      <Row style={{justify:'center',  marginTop:'20px'}}>
        <Col span={8}>
          <Table dataSource={data} columns={columns} />;
        </Col>
        <Col span={8}>
            <GooglePieChart data={data} />
        </Col>
      </Row>
    </div>
  );
}
