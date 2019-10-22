import {
  Card,
  Col,
  Button,
  Badge,
} from 'react-bootstrap';

export default function Teams(props) {
  const { selected } = props;

  const groups = [
    { id: 1,
      teams: [
        { id: 1,
          name: 'Avengers',
          imgSrc: 'http://i3.ytimg.com/vi/yQ-x95eyVbk/hqdefault.jpg',
          members: [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Spider Man' },
          ] 
        }
      ]
    },
    { id: 2,
      teams: [
        { id: 2,
          name: 'X-Men',
          imgSrc: 'https://img02.mgo-images.com/image/thumbnail?id=MMVABB49CFADC7E047A05497D646A0FA667F&ql=70&sizes=310x465',
          members: [
            { id: 3, name: 'Wolverine' },
            { id: 4, name: 'Jean Gray' },
          ] 
        },
        { id: 3,
          name: 'Incredibles',
          imgSrc: 'https://cdn.collider.com/wp-content/uploads/2018/04/incredibles-2-new-poster.jpg',
          members: [
            { id: 5, name: 'Dash' },
            { id: 6, name: 'Mr. Incredibles' },
          ] 
        }
      ]
    },
  ];

  const selectedGroup = groups.find(group => {
    return group.id === selected.id;
  });

  console.log('selectedGroup: ', selectedGroup);
  
  return (
    <Col className="d-md-flex">
      { selectedGroup && selectedGroup.teams &&
        selectedGroup.teams.map(team => {
          return (
            <Col md={3} className="py-3">
              <Card className="team-card">
                <Card.Img src={team.imgSrc} alt="team-logo" />
                <div className="team-name">{ `${team.name}` }</div>
                <Card.Body>
                  <Col className="team-members">
                    { team.members && 
                      team.members.map(member => {
                        return (
                          <Badge pill variant="secondary" title={member.name}>{ `${member.id}` }</Badge>
                        );
                      })
                    }
                  </Col>
                </Card.Body>
                <Card.Footer>
                  <Button>Join</Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })
      }
    </Col>    
  );
}
