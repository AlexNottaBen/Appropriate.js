/*!
 * Appropriate.js JavaScript Library v1.1.0
 * https://github.com/AlexNottaBen/Appropriate.js
 *
 * Copyright AlexNottaBen
 * Released under the MIT license
 * https://raw.githubusercontent.com/AlexNottaBen/Appropriate.js/main/LICENSE
 */

"use strict";

/**
 * The central class of the library, which is a collection of HTML objects
 * obtained through a CSS selector. It has the necessary methods for convenient
 * work with them.
 *
 * @class AppropriateObject
 * @extends {Array}
 */
class AppropriateObject extends Array {
    /**
     * A method that will execute the passed function when
     * the DOM is fully loaded.
     *
     * @param {Function} callback - A Function to be executed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onready(callback) {
        this.forEach((element) => {
            element.addEventListener("DOMContentLoaded", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the "load" event.
     *
     * @param {Function} callback - A function that will be triggered
     * by an event.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onload(callback) {
        this.forEach((element) => {
            element.addEventListener("load", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the "click" event.
     *
     * @param {Function} callback - A function that will be triggered
     * by an event.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onclick(callback) {
        this.forEach((element) => {
            element.addEventListener("click", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the "mouseover" event.
     *
     * @param {Function} callback - A function that will be triggered
     * by an event.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onmouseover(callback) {
        this.forEach((element) => {
            element.addEventListener("mouseover", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the "mouseout" event.
     *
     * @param {Function} callback - A function that will be triggered
     * by an event.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onmouseout(callback) {
        this.forEach((element) => {
            element.addEventListener("mouseout", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the "submit" event.
     * Especially useful for forms.
     *
     * @param {Function} callback - A function that will be triggered.
     * by an event.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    onsubmit(callback) {
        this.forEach((element) => {
            element.addEventListener("submit", callback);
        });
        return this;
    }

    /**
     * Bind an event handler to the event that is passed to the function.
     *
     * @param {Event} event - The event that is passed to the function.
     * @param {Function} callback - A function that will be triggered.
     * by an event
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    on(event, callback) {
        this.forEach((element) => {
            element.addEventListener(event, callback);
        });
        return this;
    }

    /**
     * Bind an event handler to HTML objects using a CSS selector.
     *
     * @param {Event} event - The event that is passed to the function.
     * @param {String} selector - The CSS selector that is passed to the
     * function.
     * @param {Function} callback - A function that will be triggered.
     * by an event
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    listen(event, selector, callback) {
        this.forEach((element) => {
            element.addEventListener(event, (e) => {
                if (e.target.matches(selector)) {
                    callback(e);
                }
            });
        });
        return this;
    }

    /**
     * Blur HTML objects.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    blur() {
        this.forEach((element) => {
            element.blur()
        });
        return this;
    }

    /**
     * Focus HTML objects.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    focus() {
        this.forEach((element) => {
            element.focus()
        });
        return this;
    }

    /**
     * Get HTML object from collection by index or undefined.
     *
     * @param {Number} index
     * @returns {HTMLElement|undefined}
     * @memberof AppropriateObject
     */
    get(index) {
        return this.length > 0 ? this[index] : undefined;
    }

    /**
     * Get or set the current value of the first element in a set of elements.
     *
     * @param {Number|String} [val] - The value that you go to assign to him.
     * @returns {AppropriateObject|String|Number} - The current instance of
     * AppropriateObject or The Value of HTML object.
     * @memberof AppropriateObject
     */
    value(val) {
        if (val) {
            this.forEach((element) => {
                element.value = val;
            });
            return this;
        } else {
            return this[0].value;
        }
    }

    /**
     * Go to next element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    next() {
        return this.map((element) => {
            return element.nextElementSibling;
        }).filter((element) => {
            return element !== null;
        });
    }

    /**
     * Go to previous element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    prev() {
        return this.map((element) => {
            return element.previousElementSibling;
        }).filter((element) => {
            return element !== null;
        });
    }

    /**
     * Adds a class to the selected elements.
     *
     * @param {String} className - The name of class that is passed to
     * the function.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    addClass(className) {
        this.forEach((element) => {
            element.classList.add(className);
        });
        return this;
    }

    /**
     * Removes a class from the selected elements.
     *
     * @param {string} className - The name of class that is passed to
     * the function.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    removeClass(className) {
        this.forEach((element) => {
            element.classList.remove(className);
        });
        return this;
    }

    /**
     * Return true If all elements in the collection have this class, otherwise
     * false.
     *
     * @param {String} className - The name of class that is passed to
     * the function.
     * @returns {boolean}
     * @memberof AppropriateObject
     */
    hasClass(className) {
        let allHaveClass = Array.from(this).every((element) => {
            return element.classList.contains(className);
        });
        return allHaveClass;
    }

    /**
     * Toggle the class in selected elements.
     *
     * @param {String} className
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    toggleClass(className) {
        this.forEach((element) => {
            element.classList.toggle(className);
        });
        return this;
    }

    /**
     * Get or Set style for collection of elements.
     *
     * @param {String} property - The CSS property.
     * @param {String|Number} value - The CSS value of property.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    style(property, value) {
        if (value) {
            const camelCaseProperty = property.replace(/(-[a-z])/, (prop) => {
                return prop.replace("-", "").toUpperCase();
            });
            this.forEach((element) => {
                return (element.style[camelCaseProperty] = value);
            });
            return this;
        } else {
            const element = this[0];
            const styles = window.getComputedStyle(element);
            const value = styles.getPropertyValue(property);
            return value;
        }
    }

    /**
     * Get first element of collection, but wrapper by AppropriateObject.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    first() {
        return new AppropriateObject(this[0]);
    }

    /**
     * Get last element of collection, but wrapper by AppropriateObject.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    last() {
        return new AppropriateObject(this[this.length - 1]);
    }

    /**
     * Set or get innerText of element or undefined.
     *
     * @param {String} message - The text for innerText.
     * @returns {AppropriateObject|String|undefined} - The current instance of
     * AppropriateObject or innerText.
     * @memberof AppropriateObject
     */
    text(message) {
        if (message) {
            this.forEach((element) => {
                element.innerText = message;
            });
            return this;
        } else {
            return this.length > 0 ? this[0].innerText : undefined;
        }
    }

    /**
     * Set or get innerHTML of element or undefined.
     *
     * @param {String} HTML - The text for innerHTML.
     * @returns {AppropriateObject|String|undefined} - The current instance of
     * AppropriateObject or innerHTML.
     * @memberof AppropriateObject
     */
    html(HTML) {
        if (HTML) {
            this.forEach((element) => {
                element.innerHTML = HTML;
            });
            return this;
        } else {
            return this.length > 0 ? this[0].innerHTML : undefined;
        }
    }

    /**
     * Insert content to the end of each element
     * in the collection of elements.
     *
     * @param {String} content - The content to insert.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    append(content) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("beforeend", content);
        });
        return this;
    }

    /**
     * Insert content to the start of each element
     * in the collection of elements.
     *
     * @param {String} content - The content to insert.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    prepend(content) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("afterbegin", content);
        });
        return this;
    }

    /**
     * Insert content after each element in the collection of elements.
     *
     * @param {String} content - The content to insert.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    after(content) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("afterend", content);
        });
        return this;
    }

    /**
     * Insert content before each element in the collection of elements.
     *
     * @param {String} content - The content to insert.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    before(content) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("beforebegin", content);
        });
        return this;
    }

    /**
     * Get parent HTML object wrapper by AppropriateObject.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    parent() {
        const parent = this[0].parentElement;
        return new AppropriateObject(parent);
    }

    /**
     * Get children HTML objects wrapper by AppropriateObject.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    children() {
        // Getting all child elements as an array.
        const children = Array.from(this[0].children);
        return new AppropriateObject(children);
    }

    /**
     * Find first HTML object by specified CSS selector (wrapper by
     * AppropriateObject)
     *
     * @param {String} selector - The specified CSS selector.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    find(selector) {
        return new AppropriateObject(this[0].querySelector(selector));
    }

    /**
     * Find all HTML objects by specified CSS selector (wrapper by
     * AppropriateObject)
     *
     * @param {String} selector - The specified CSS selector.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    findAll(selector) {
        return new AppropriateObject(this[0].querySelectorAll(selector));
    }

    /**
     * Find first HTML object by specified CSS selector (NOT wrapper by
     * AppropriateObject)
     *
     * @param {String} selector - The specified CSS selector.
     * @returns {HTMLElement} - The HTML object.
     * @memberof AppropriateObject
     */
    findElement(selector) {
        return this[0].querySelector(selector);
    }

    /**
     * Find all HTML objects by specified CSS selector (NOT wrapper by
     * AppropriateObject)
     *
     * @param {String} selector - The specified CSS selector.
     * @returns {HTMLElement[]} - The HTML objects.
     * @memberof AppropriateObject
     */
    findAllElements(selector) {
        return this[0].querySelectorAll(selector);
    }

    /**
     * Play 'Fade In' Animation.
     *
     * @param {Number} [durationInMS=500] - A duration in milliseconds that
     * specifies the duration of the animation.
     * @param {Function} [callback=() => {}] - A callback function that will be
     * called after the animation has completed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    fadeIn(durationInMS = 500, callback = () => {}) {
        this.forEach((element) => {
            element.style.opacity = 0;
            element.style.display = "";

            // Call the styles recalculation so that the application of the styles above is fixed.
            element.offsetHeight;

            element.style.transition = `opacity ${durationInMS}ms`;
            element.style.opacity = 1;

            setTimeout(() => {
                // Reset the transition after the animation is complete!
                element.style.transition = "";
                callback();
            }, durationInMS);
        });
        return this;
    }

    /**
     * Play 'Fade Out' Animation.
     *
     * @param {Number} [durationInMS=500] - A duration in milliseconds that
     * specifies the duration of the animation.
     * @param {Function} [callback=() => {}] - A callback function that will be
     * called after the animation has completed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    fadeOut(durationInMS = 500, callback = () => {}) {
        this.forEach((element) => {
            element.style.opacity = 1;
            element.style.transition = `opacity ${durationInMS}ms`;
            element.style.opacity = 0;

            setTimeout(() => {
                // Resetting the transition after the animation is complete!
                element.style.transition = "";
                callback();
            }, durationInMS);
        });
        return this;
    }

    /**
     * Hide The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    hide() {
        this.forEach((element) => {
            element.style.visibility = "hidden";
        });
        return this;
    }

    /**
     * Show The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    show() {
        this.forEach((element) => {
            element.style.visibility = "visible";
        });
        return this;
    }

    /**
     * Clear innerHTML of The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    clear() {
        this.forEach((element) => {
            element.innerHTML = "";
        });
        return this;
    }

    /**
     * Remove The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    remove() {
        this.forEach((element) => {
            if (element instanceof Element) {
                element.remove();
            }
        });
        return this;
    }

    /**
     * Set 'display = "none"' for The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    none() {
        this.forEach((element) => {
            element.style.display = "none";
        });
        return this;
    }

    /**
     * Set 'display = "block"' for The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    block() {
        this.forEach((element) => {
            element.style.display = "block";
        });
        return this;
    }

    /**
     * Set 'display = "inline"' for The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    inline() {
        this.forEach((element) => {
            element.style.display = "inline";
        });
        return this;
    }

    /**
     * Set 'display = "inline-block"' for The HTML Element.
     *
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    inlineBlock() {
        this.forEach((element) => {
            element.style.display = "inline-block";
        });
        return this;
    }

    /**
     * Play 'slide In' Animation.
     *
     * @param {Number} [durationInMS=500] - A duration in milliseconds that
     * specifies the duration of the animation.
     * @param {Function} [callback=() => {}] - A callback function that will be
     * called after the animation has completed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    slideUp(durationInMS = 500, callback = () => {}) {
        this.forEach((element) => {
            element.style.overflow = "hidden";
            element.style.height = element.scrollHeight + "px";
            // Force style recalculation!
            element.offsetHeight;
            element.style.transition = `height ${durationInMS}ms`;
            element.style.height = 0;

            setTimeout(() => {
                element.style.display = "none";
                element.style.height = "";
                element.style.overflow = "";
                element.style.transition = "";
                callback();
            }, durationInMS);
        });
        return this;
    }

    /**
     * Play 'slide Down' Animation.
     *
     * @param {Number} [durationInMS=500] - A duration in milliseconds that
     * specifies the duration of the animation.
     * @param {Function} [callback=() => {}] - A callback function that will be
     * called after the animation has completed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    slideDown(durationInMS = 500, callback = () => {}) {
        this.forEach((element) => {
            // Remove "display: none" if it was set.
            element.style.removeProperty("display");
            let display = window.getComputedStyle(element).display;
            // If the element is hidden, set "display: block".
            if (display === "none") {
                display = "block";
            }
            element.style.display = display;

            // Getting the full height of the element.
            let height = element.scrollHeight;

            element.style.overflow = "hidden";
            element.style.height = 0;
            // Force style recalculation!
            element.offsetHeight;
            element.style.transition = `height ${durationInMS}ms`;
            element.style.height = height + "px";

            setTimeout(() => {
                element.style.height = "";
                element.style.overflow = "";
                element.style.transition = "";
                callback();
            }, durationInMS);
        });
        return this;
    }

    /**
     * Iterate over an AppropriateObject.
     *
     * @param {Function} callback
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    each(callback) {
        this.forEach(callback);
        return this;
    }

    /**
     * Get or set the value of a property.
     *
     * @param {String} propertyName - The name of the property to set.
     * @param {Any} [value] - A value to set for the property (optional).
     * @returns {Any|undefined} - The value of a property or undefined (if set).
     * @memberof AppropriateObject
     */
    property(propertyName, value) {
        this.forEach((element) => {
            if (value === undefined) {
                return element[propertyName];
            } else {
                element[propertyName] = value;
            }
        });
    }

    /**
     * Get or set the value of an attribute.
     *
     * @param {String} key - The key of the attribute to set.
     * @param {Any} [value] - A value to set for the attribute (optional).
     * @returns {Any|undefined} - The value of an attribute or undefined
     * (if set).
     * @memberof AppropriateObject
     */
    attribute(key, value) {
        if (value) {
            this.forEach((element) => {
                element.setAttribute(key, value);
            });
        } else {
            return this.length > 0 ? this[0].getAttribute(key) : undefined;
        }
    }

    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param {Object} properties - An object of CSS properties and values that
     * the animation will move toward.
     * @param {Number} [durationInMS=500] - A duration in milliseconds that
     * specifies the duration of the animation.
     * @param {Function} [callback=() => {}] - A callback function that will be
     * called after the animation has completed.
     * @returns {AppropriateObject} - The current instance of AppropriateObject.
     * @memberof AppropriateObject
     */
    animate(properties, durationInMS = 500, callback = () => {}) {
        this.forEach((element) => {
            const start = performance.now();
            const initialStyles = {};

            // Saving initial property values.
            for (const property in properties) {
                initialStyles[property] =
                    parseFloat(getComputedStyle(element)[property]) || 0;
            }

            const animateFrame = function (time) {
                const elapsed = time - start;
                const progress = Math.min(elapsed / durationInMS, 1);

                for (const property in properties) {
                    const initial = initialStyles[property];
                    const target = parseFloat(properties[property]);
                    const value = initial + (target - initial) * progress;
                    element.style[property] =
                        value + (property === "opacity" ? "" : "px");
                }

                if (progress < 1) {
                    requestAnimationFrame(animateFrame);
                } else if (typeof callback === "function") {
                    callback.call(element);
                }
            };

            requestAnimationFrame(animateFrame);
        });
        return this;
    }
}

/**
 * Takes a string containing a CSS selector, which is then used to match
 * a collection of elements.
 *
 * @param {String|Element|Document} params - The CSS selector or Element or
 * Document
 * @returns {AppropriateObject} - The instance of AppropriateObject.
 */
const createAppropriateObject = function (params) {
    if (typeof params === "string" || params instanceof String) {
        return new AppropriateObject(...document.querySelectorAll(params));
    } else {
        return new AppropriateObject(params);
    }
};

/**
 * Alias to createAppropriateObject
 * @alias createAppropriateObject
 */
const select = createAppropriateObject;

/**
 * Alias to createAppropriateObject
 * @alias createAppropriateObject
 */
const $ = createAppropriateObject;

/**
 * @namespace requests
 */
const requests = {
    /**
     * Perform a GET request.
     *
     * @function
     * @memberof requests
     * @param {Object} options - Options for the GET request.
     * @param {string} options.url - The URL to send the request to.
     * @param {boolean} [options.echo=false] - Whether to log errors to the
     * console.
     * @param {Object} [options.data={}] - Data to be sent as query parameters.
     * @param {string} [options.mode="cors"] - The mode of the request.
     * @param {string} [options.cache="default"] - The cache mode of the
     * request.
     * @param {Object} [options.headers={}] - Headers to be sent with the
     * request.
     * @param {string} [options.credentials="same-origin"] - The credentials
     * mode of the request.
     * @param {string} [options.redirect="follow"] - The redirect mode of the
     * request.
     * @param {string} [options.referrerPolicy="no-referrer"] - The referrer
     * policy of the request.
     * @param {Function} [options.beforeSend] - Function to be called before
     * sending the request.
     * @param {Function} [options.success] - Function to be called on a
     * successful response.
     * @param {Function} [options.except] - Function to be called on an error
     * response.
     * @param {Function} [options.always] - Function to be called after the
     * request is completed.
     */
    get: ({
        url,
        echo = false,
        data = {},
        mode = "cors",
        cache = "default",
        headers = {},
        credentials = "same-origin",
        redirect = "follow",
        referrerPolicy = "no-referrer",
        beforeSend = () => {},
        success = () => {},
        except = () => {},
        always = () => {},
    }) => {
        beforeSend();

        const queryString = Object.entries(data)
            .map(([key, value]) => {
                return `${key}=${value}`;
            })
            .join("&");

        const requestUrl = `${url}?${queryString}`;

        fetch(requestUrl, {
            method: "GET",
            headers: headers,
            mode: mode,
            cache: cache,
            credentials: credentials,
            redirect: redirect,
            referrerPolicy: referrerPolicy,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((responseData) => {
                success(responseData);
                return responseData;
            })
            .catch((error) => {
                if (echo) {
                    console.error(`Error requesting ${requestUrl}`);
                }
                except(error);
            })
            .finally(() => {
                always();
            });
    },

    /**
     * Perform a JSON request.
     *
     * @function
     * @memberof requests
     * @param {Object} options - Options for the JSON request.
     * @param {string} options.url - The URL to send the request to.
     * @param {string} [options.method="POST"] - The HTTP method to use for the request.
     * @param {Object} [options.data={}] - Data to be sent in the request body.
     * @param {boolean} [options.echo=false] - Whether to log errors to the console.
     * @param {string} [options.mode="cors"] - The mode of the request.
     * @param {string} [options.cache="default"] - The cache mode of the request.
     * @param {Object} [options.headers={}] - Headers to be sent with the request.
     * @param {string} [options.credentials="same-origin"] - The credentials mode of the request.
     * @param {string} [options.redirect="follow"] - The redirect mode of the request.
     * @param {string} [options.referrerPolicy="no-referrer"] - The referrer policy of the request.
     * @param {Function} [options.beforeSend] - Function to be called before sending the request.
     * @param {Function} [options.success] - Function to be called on a successful response.
     * @param {Function} [options.except] - Function to be called on an error response.
     * @param {Function} [options.always] - Function to be called after the request is completed.
     */
    json: ({
        url,
        method = "POST",
        data = {},
        echo = false,
        mode = "cors",
        cache = "default",
        headers = {},
        credentials = "same-origin",
        redirect = "follow",
        referrerPolicy = "no-referrer",
        beforeSend = () => {},
        success = () => {},
        except = () => {},
        always = () => {},
    }) => {
        beforeSend();

        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                ...headers,
            },
            mode: mode,
            cache: cache,
            credentials: credentials,
            redirect: redirect,
            referrerPolicy: referrerPolicy,
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((responseData) => {
                success(responseData);
                return responseData;
            })
            .catch((error) => {
                if (echo) {
                    console.error(`Error requesting ${url}`);
                }
                except(error);
            })
            .finally(() => {
                always();
            });
    },

    /**
     * Perform a form request.
     *
     * @function
     * @memberof requests
     * @param {Object} options - Options for the form request.
     * @param {string} options.url - The URL to send the request to.
     * @param {string} [options.method="POST"] - The HTTP method to use for the
     * request.
     * @param {Object} [options.data={}] - Data to be sent in the request body.
     * @param {boolean} [options.echo=false] - Whether to log errors to the
     * console.
     * @param {string} [options.mode="cors"] - The mode of the request.
     * @param {string} [options.cache="default"] - The cache mode of the
     * request.
     * @param {Object} [options.headers={}] - Headers to be sent with the
     * request.
     * @param {string} [options.credentials="same-origin"] - The credentials
     * mode of the request.
     * @param {string} [options.redirect="follow"] - The redirect mode of the
     * request.
     * @param {string} [options.referrerPolicy="no-referrer"] - The referrer
     * policy of the request.
     * @param {Function} [options.beforeSend] - Function to be called before
     * sending the request.
     * @param {Function} [options.success] - Function to be called on a
     * successful response.
     * @param {Function} [options.except] - Function to be called on an error
     * response.
     * @param {Function} [options.always] - Function to be called after the
     * request is completed.
     */
    form: ({
        url,
        method = "POST",
        data = {},
        echo = false,
        mode = "cors",
        cache = "default",
        headers = {},
        credentials = "same-origin",
        redirect = "follow",
        referrerPolicy = "no-referrer",
        beforeSend = () => {},
        success = () => {},
        except = () => {},
        always = () => {},
    }) => {
        beforeSend();

        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                ...headers,
            },
            mode: mode,
            cache: cache,
            credentials: credentials,
            redirect: redirect,
            referrerPolicy: referrerPolicy,
            body: new URLSearchParams(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((responseData) => {
                success(responseData);
                return responseData;
            })
            .catch((error) => {
                if (echo) {
                    console.error(`Error requesting ${url}`);
                }
                except(error);
            })
            .finally(() => {
                always();
            });
    },
};

requests.args = requests.get;
