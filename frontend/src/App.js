import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {theme} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {ToastContainer} from 'react-toastify';
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './pages/Login';
import UserDashboard from './pages/user/UserDashboard';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserRoute from './components/UserRoute';
import Layout from './pages/global/Layout';
import userInfoDashboard from './pages/user/UserInfoDasboard';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDasboardHOC = Layout(userInfoDashboard);


// Define your theme object
//const theme = createTheme();

const App = () => {
  return (
    <>
      <ToastContainer/>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/location/:location' element={<Home />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
            <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
            <Route path='/user/info' element={<UserRoute><UserInfoDasboardHOC /></UserRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ProSidebarProvider>
        
          
        
      </ThemeProvider>
    </>
  )
}

export default App;
