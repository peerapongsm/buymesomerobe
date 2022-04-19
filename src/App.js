import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import React, { useState } from 'react';
var Roll = require('roll')

function App() {
  const [count, setCount] = useState(1)
  const [display, setDisplay] = useState(false)
  const [state, setState] = useState(Array(13).fill(0))

  if (display) {
    return (
      <div>
        <Table striped bordered hover style={{width: "90%", margin: "5%"}}>
          <thead>
            <tr>
              <th>d100</th>
              <th>Patch</th>
              <th>Count</th>
              <th>GP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01-08</td>
              <td>Bag of 100 gp</td>
              <td>{state[0]}</td>
              <td>{state[0] * 100}</td>
            </tr>
            <tr>
              <td>09-15</td>
              <td>Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp</td>
              <td>{state[1]}</td>
              <td>{state[1] * 500}</td>
            </tr>
            <tr>
              <td>16-22</td>
              <td>Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself</td>
              <td>{state[2]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>23-30</td>
              <td>10 gems worth 100 gp each</td>
              <td>{state[3]}</td>
              <td>{state[3] * 1000}</td>
            </tr>
            <tr>
              <td>31-44</td>
              <td>Wooden ladder (24 feet long)</td>
              <td>{state[4]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>45-51</td>
              <td>A riding horse with saddle bags</td>
              <td>{state[5]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>52-59</td>
              <td>Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you</td>
              <td>{state[6]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>60-68</td>
              <td>Potion of healing (4)</td>
              <td>{state[7]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>69-75</td>
              <td>Rowboat (12 feet long)</td>
              <td>{state[8]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>76-83</td>
              <td>Spell scroll containing one spell of 1st to 3rd level</td>
              <td>{state[9]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>84-90</td>
              <td>Mastiff (2)</td>
              <td>{state[10]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>91-96</td>
              <td>Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach</td>
              <td>{state[11]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>97-00</td>
              <td>Portable ram</td>
              <td>{state[12]}</td>
              <td>0</td>
            </tr>
            <tr>
              <td></td>
              <td>Total GP</td>
              <td></td>
              <td>{state[0] * 100 + state[1] * 500 + state[3] * 1000}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Label htmlFor="qty">How many robes do you want to buy?</Form.Label>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Control onChange={(e) => setCount(e.target.value)}
            min="1" style={{width: "43%"}} id="input" type="number" aria-describedby="robes qty"/>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Button
            onClick={ (e) => {
                      setDisplay(!display)
                      var dice = new Roll()
                      var patches = 0
                      var robes = Array(13).fill(0)
                      for (let i = 0; i < count; i++) {
                        patches += dice.roll('4d4').result
                      }

                      for (let i = 0; i < patches; i++) {
                        var d100 = dice.roll("d100")
                        if (d100.result < 9) {
                          robes[0]++
                        } else if (d100.result < 16) {
                          robes[1]++
                        } else if (d100.result < 23) {
                          robes[2]++
                        } else if (d100.result < 31) {
                          robes[3]++
                        } else if (d100.result < 45) {
                          robes[4]++
                        } else if (d100.result < 52) {
                          robes[5]++
                        } else if (d100.result < 60) {
                          robes[6]++
                        } else if (d100.result < 69) {
                          robes[7]++
                        } else if (d100.result < 76) {
                          robes[8]++
                        } else if (d100.result < 84) {
                          robes[9]++
                        } else if (d100.result < 91) {
                          robes[10]++
                        } else if (d100.result < 97) {
                          robes[11]++
                        } else {
                          robes[12]++
                        }
                      }
                      setState(robes)
                    }
                  }
            style={{width: "43%"}} id="button" variant="primary">Roll</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

//
