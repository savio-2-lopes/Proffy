import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Landing from './pages/Landing';

function Routes()
{

    return (
        <BrowserRouter>
            <Route path = "/" exact component= {Landing}/>
            <Route path = "/study" component= {TeacherList}/>
            <Route path = "/give-classes" component= {TeacherForm}/>
        </BrowserRouter>
    )
}
export default Routes;