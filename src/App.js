import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import {Routes, Route, Navigate} from 'react-router-dom'
import { UserState } from './context/UserContext';
import UserTable from './components/Dashboard/UsersTable';


const ProtectedRoute = ({ account, redirectPath = '/' , children}) => {
  if (!account) {
    return <Navigate to={redirectPath}  />;
  }

  return children;
};


function App() {
  const {account} = UserState();
  
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="dashboard" element={ 
            <ProtectedRoute account={account}>
              <Dashboard />
            </ProtectedRoute>} >
            <Route path="members-directory" element={<UserTable/>}/>
            <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Route>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
    </Layout>
  );
}

export default App;
