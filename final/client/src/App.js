import "./App.css";
import React, { useState } from 'react';
import Axios from 'axios';

function App(){
  //1. Idea Section
  function IdeaSection() {
    const [user_id, setUserId] = useState(0);
    const [idea_topic, setIdeaTopic] = useState('');
    const [idea_detail, setIdeaDetail] = useState('');
    const [like, setLike] = useState(0);
    const [newLike, setNewLike] = useState(0);
    const [ideaList, setIdeaList] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [topicOptions, setTopicOptions] = useState([
      'sociology',
      'mathematics',
      'physics',
      'chemistry',
      'computer science',
      'political science',
      'law',
      'art',
    ]);
  
    const handleTopicChange = (event) => {
      setSelectedTopic(event.target.value);
    };
  
    const addIdea = () => {
      Axios.post('http://localhost:3001/create/idea', {
        user_id: user_id,
        idea_topic: idea_topic,
        idea_detail: idea_detail,
        like: like,
        choose_topic: selectedTopic,
      }).then(() => {
        setIdeaList([
          ...ideaList,
          {
            user_id: user_id,
            idea_topic: idea_topic,
            idea_detail: idea_detail,
            like: like,
            choose_topic: selectedTopic,
          },
        ]);
      });
    };
  
    const getIdeas = () => {
      Axios.get('http://localhost:3001/ideas').then((response) => {
        setIdeaList(response.data);
      });
    };
  
    const updateIdeaLike = (idea_id) => {
      Axios.put('http://localhost:3001/update/idea', { like: newLike, idea_id: idea_id }).then(
        (response) => {
          setIdeaList(
            ideaList.map((val) => {
              return val.idea_id === idea_id
                ? {
                    idea_id: val.idea_id,
                    user_id: val.user_id,
                    idea_topic: val.idea_topic,
                    idea_detail: val.idea_detail,
                    like: newLike,
                    choose_topic: val.choose_topic,
                  }
                : val;
            })
          );
        }
      );
    };
  
    const deleteIdea = (idea_id) => {
      Axios.delete(`http://localhost:3001/delete/idea/${idea_id}`).then((response) => {
        setIdeaList(
          ideaList.filter((val) => {
            return val.idea_id !== idea_id;
          })
        );
      });
    };
  
    return (
      <div>
        <div className="information">
          <label>User ID:</label>
          <input type="number" onChange={(event) => setUserId(event.target.value)} />
          <label>Idea Topic:</label>
          <input type="text" onChange={(event) => setIdeaTopic(event.target.value)} />
          <label>Idea Detail:</label>
          <input type="text" onChange={(event) => setIdeaDetail(event.target.value)} />
          <label>Like:</label>
          <input type="number" onChange={(event) => setLike(event.target.value)} />
          <label>Choose Topic:</label>
          <select value={selectedTopic} onChange={handleTopicChange}>
            {topicOptions.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <button onClick={addIdea}>Add Idea</button>
        </div>
        <div className="ideas">
          <button onClick={getIdeas}>Show Ideas</button>
          {ideaList.map((val, key) => (
            <div className="idea" key={key}>
              <div>
                <h3>User ID: {val.user_id}</h3>
                <h3>Idea Topic: {val.idea_topic}</h3>
                <h3>Idea Detail: {val.idea_detail}</h3>
                <h3>Like: {val.like}</h3>
                <h3>Choose Topic: {val.choose_topic}</h3>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="10..."
                  onChange={(event) => setNewLike(event.target.value)}
                />
                <button onClick={() => updateIdeaLike(val.idea_id)}>Update</button>
                <button onClick={() => deleteIdea(val.idea_id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }



  //2. Demo Section
  function DemoSection() {
    const [demo_user_id, setDemoUserId] = useState(0);
    const [demo_topic, setDemoTopic] = useState('');
    const [demo_link, setDemoLink] = useState('');
    const [demoList, setDemoList] = useState([]);

    const addDemo = () => {
      Axios.post('http://localhost:3001/create/demo', {
        user_id: demo_user_id,
        demo_topic: demo_topic,
        demo_link: demo_link,
      }).then(() => {
        setDemoList([
          ...demoList,
          {
            user_id: demo_user_id,
            demo_topic: demo_topic,
            demo_link: demo_link,
          },
        ]);
      });
    };

    const getDemos = () => {
      Axios.get('http://localhost:3001/demos').then((response) => {
        setDemoList(response.data);
      });
    };

    const deleteDemo = (demo_id) => {
      Axios.delete(`http://localhost:3001/delete/demo/${demo_id}`).then((response) => {
        setDemoList(
          demoList.filter((val) => {
            return val.demo_id !== demo_id;
          })
        );
      });
    };

    return (
      <div>
        <div className="information">
          <label>User ID:</label>
          <input type="number" onChange={(event) => setDemoUserId(event.target.value)} />
          <label>Demo Topic:</label>
          <input type="text" onChange={(event) => setDemoTopic(event.target.value)} />
          <label>Demo Link:</label>
          <input type="text" onChange={(event) => setDemoLink(event.target.value)} />
          <button onClick={addDemo}>Add Demo</button>
        </div>
        <div className="demos">
          <button onClick={getDemos}>Show Demos</button>
          {demoList.map((val, key) => (
            <div className="demo" key={key}>
              <div>
                <h3>User ID: {val.user_id}</h3>
                <h3>Demo Topic: {val.demo_topic}</h3>
                <h3>Demo Link: {val.demo_link}</h3>
              </div>
              <div>
                <button onClick={() => deleteDemo(val.demo_id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  //3. User Section
  function UserSection() {
    const [user_user_id, setUserUserId] = useState(0);
    const [user_name, setUserName] = useState('');
    const [userList, setUserList] = useState([]);
  
    const addUser = () => {
      Axios.post('http://localhost:3001/create/user', {
        user_id: user_user_id,
        name: user_name,
      }).then(() => {
        setUserList([
          ...userList,
          {
            user_id: user_user_id,
            name: user_name,
          },
        ]);
      });
    };
  
    const getUsers = () => {
      Axios.get('http://localhost:3001/users').then((response) => {
        setUserList(response.data);
      });
    };
  
    const deleteUser = (user_id) => {
      Axios.delete(`http://localhost:3001/delete/user/${user_id}`).then((response) => {
        setUserList(
          userList.filter((val) => {
            return val.user_id !== user_id;
          })
        );
      });
    };
  
    return (
      <div>
        <div className="information">
          <label>User ID:</label>
          <input type="number" onChange={(event) => setUserUserId(event.target.value)} />
          <label>Name:</label>
          <input type="text" onChange={(event) => setUserName(event.target.value)} />
          <button onClick={addUser}>Add User</button>
        </div>
        <div className="users">
          <button onClick={getUsers}>Show Users</button>
          {userList.map((val, key) => (
            <div className="user" key={key}>
              <div>
                <h3>User ID: {val.user_id}</h3>
                <h3>Name: {val.name}</h3>
              </div>
              <div>
                <button onClick={() => deleteUser(val.user_id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


}
export default App;
