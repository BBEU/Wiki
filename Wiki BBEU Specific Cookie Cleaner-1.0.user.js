// ==UserScript==
// @name         Wiki BBEU Specific Cookie Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically clears specific cookies for the BBEU wiki site
// @match        http://wiki.bbeu.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to clear specific cookies for the wiki.bbeu.org site
    function clearWikiCookies() {
        // Array of specific cookie names to remove
        const cookiesToRemove = [
            'session_id',      // Replace with the actual cookie names
            'auth_token',      // Example: Authentication token
            'wiki_user_pref'   // Example: User preferences cookie
        ];

        // Iterate through the cookie names and delete them
        cookiesToRemove.forEach(cookieName => {
            // Clear the cookie for the current domain
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
            // Clear the cookie without specifying the domain (just in case)
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        });

        console.log("Specific cookies for wiki.bbeu.org have been cleared.");
    }

    // Call the function immediately to clear cookies when the page loads
    clearWikiCookies();
})();
