/*!
 * Appropriate.js JavaScript Library v1.0.0
 * https://github.com/AlexNottaBen/Appropriate.js
 *
 * Copyright AlexNottaBen
 * Released under the MIT license
 * https://raw.githubusercontent.com/AlexNottaBen/Appropriate.js/main/LICENSE
 */

"use strict";

class AppropriateObject extends Array {
    onready(callback) {
        this.forEach((element) => {
            element.addEventListener("DOMContentLoaded", callback);
        });
        return this;
    }

    onload(callback) {
        this.forEach((element) => {
            element.addEventListener("load", callback);
        });
        return this;
    }

    onclick(callback) {
        this.forEach((element) => {
            element.addEventListener("click", callback);
        });
        return this;
    }

    onmouseover(callback) {
        this.forEach((element) => {
            element.addEventListener("mouseover", callback);
        });
        return this;
    }

    onmouseout(callback) {
        this.forEach((element) => {
            element.addEventListener("mouseout", callback);
        });
        return this;
    }

    onsubmit(callback) {
        this.forEach((element) => {
            element.addEventListener("submit", callback);
        });
        return this;
    }

    on(event, callback) {
        this.forEach((element) => {
            element.addEventListener(event, callback);
        });
        return this;
    }

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

    get(index) {
        return this.length > 0 ? this[index] : undefined;
    }

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

    next() {
        return this.map((element) => {
            return element.nextElementSibling;
        }).filter((element) => {
            return element !== null;
        });
    }

    prev() {
        return this.map((element) => {
            return element.previousElementSibling;
        }).filter((element) => {
            return element !== null;
        });
    }

    addClass(className) {
        this.forEach((element) => {
            element.classList.add(className);
        });
        return this;
    }

    removeClass(className) {
        this.forEach((element) => {
            element.classList.remove(className);
        });
        return this;
    }

    hasClass(className) {
        let allHaveClass = Array.from(this).every((element) => {
            return element.classList.contains(className);
        });
        return allHaveClass;
    }

    toggleClass(className) {
        this.forEach((element) => {
            element.classList.toggle(className);
        });
        return this;
    }

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

    first() {
        return new AppropriateObject(this[0]);
    }

    last() {
        return new AppropriateObject(this[this.length - 1]);
    }

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

    append(element) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("beforeend", element);
        });
        return this;
    }

    prepend(element) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("afterbegin", element);
        });
        return this;
    }

    after(element) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("afterend", element);
        });
    }

    before(element) {
        this.forEach((elem) => {
            elem.insertAdjacentHTML("beforebegin", element);
        });
    }

    parent() {
        const parent = this[0].parentElement;
        return new AppropriateObject(parent);
    }

    children() {
        // Getting all child elements as an array.
        const children = Array.from(this[0].children);
        return new AppropriateObject(children);
    }

    find(selector) {
        return new AppropriateObject(this[0].querySelector(selector));
    }

    findAll(selector) {
        return new AppropriateObject(this[0].querySelectorAll(selector));
    }

    findElement(selector) {
        return this[0].querySelector(selector);
    }

    findAllElements(selector) {
        return this[0].querySelectorAll(selector);
    }

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

    hide() {
        this.forEach((element) => {
            element.style.visibility = "hidden";
        });
        return this;
    }

    show() {
        this.forEach((element) => {
            element.style.visibility = "visible";
        });
        return this;
    }

    clear() {
        this.forEach((element) => {
            element.innerHTML = "";
        });
        return this;
    }

    remove() {
        this.forEach((element) => {
            if (element instanceof Element) {
                element.remove();
            }
        });
        return this;
    }

    none() {
        this.forEach((element) => {
            element.style.display = "none";
        });
        return this;
    }

    block() {
        this.forEach((element) => {
            element.style.display = "block";
        });
        return this;
    }

    inline() {
        this.forEach((element) => {
            element.style.display = "inline";
        });
        return this;
    }

    inlineBlock() {
        this.forEach((element) => {
            element.style.display = "inline-block";
        });
        return this;
    }

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

    each(callback) {
        this.forEach(callback);
        return this;
    }

    property(propertyName, value) {
        this.forEach((element) => {
            if (value === undefined) {
                return element[propertyName];
            } else {
                element[propertyName] = value;
            }
        });
    }

    attribute(key, value) {
        if (value) {
            this.forEach((element) => {
                element.setAttribute(key, value);
            });
        } else {
            return this.length > 0 ? this[0].getAttribute(key) : undefined;
        }
    }

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

const appropriate = function (params) {
    if (typeof params === "string" || params instanceof String) {
        return new AppropriateObject(...document.querySelectorAll(params));
    } else {
        return new AppropriateObject(params);
    }
};

const select = appropriate;
const $ = appropriate;

const requests = {
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
