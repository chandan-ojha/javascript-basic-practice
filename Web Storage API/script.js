/** Local Stroage **/

function setLocalStroage(key,value)
{
    localStorage.setItem(key,value);
}

function getLocalStroage(key)
{
    alert(localStorage.getItem(key));
}

function removeLocalStroage(key)
{
    localStorage.removeItem(key);
}

function clearLocalStroage()
{
    localStorage.clear();
}

/** Session Stroage **/

function setSessionStroage(name,value)
{
    sessionStorage.setItem(name,value);
}

function getSessionStroage(name)
{
    alert(`${name} : ${sessionStorage.getItem(name)}`);
}

function removeSessionStroage(name)
{
    sessionStorage.removeItem(name);
}

function getSessionKeyLength()
{
    alert(`sessionStorage has ${sessionStorage.length} keys`);
}

function clearSessionStroage()
{
    sessionStorage.clear();
}