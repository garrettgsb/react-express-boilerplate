import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

import beets from '../../assets/images/vegetables/Beets.png';
import carrots from '../../assets/images/vegetables/carrots.png';
import cucumbers from '../../assets/images/vegetables/cucumbers.png';
import radishes from '../../assets/images/vegetables/radish.png';

class SamplePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Beets' isOption>
                            <div class="flex-row">
                            <img className="img-veg" src={beets} alt="Beets"></img>
                            <p>
                                Beets are a root vegetable, best grown in 10-26 degrees C. They require 4-6 hours of sunlight per day, water every 3 days, and need to be spaced 4 inches apart.
                            </p>
                            </div> 
                        </Card>
                        <Card title='Carrots' isOption>
                            <div class="flex-row">
                            <img className="img-veg" src={carrots} alt="Carrots"></img>
                            <p>
                                Carrots are root vegetables, best grown in 10-28 degrees C. They require 7 hours of sunlight per day, water every 3 days, and need to be spaced 2 inches apart.
                            </p>
                            </div>
                        </Card>
                        <Card title='Cucumbers' isOption>
                            <div class="flex-row">
                            <img className="img-veg" src={cucumbers} alt="Cucumbers"></img>
                            <p>
                                Cucumbers are an easy-care vegetable, best grown in 15-30 degrees C. They require 5 hours of sunlight per day, water once a week, and need to be spaced 2-3 feet apart.
                            </p>
                            </div> 
                        </Card>
                        <Card title='Radishes' isOption>
                            <div class="flex-row">
                            <img className="img-veg" src={radishes} alt="Radishes"></img>
                            <p>
                                Radishes are fast growing root vegetables, best grown in 18-30 degrees C. They require 3 hours of sunlight per day, water every 3 days, and need to be spaced 4 feet apart.
                            </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;