class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }
    
    connectedCallback(){
        this.render();
    }
       
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
      
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
      
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .mb-3, .my-3 {
            margin-bottom: 1rem !important;
        }
        .input-group {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            width: 100%;
        }
        *, ::after, ::before {
            box-sizing: border-box;
        }

        .input-group > .custom-select:not(:last-child), .input-group > .form-control:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .input-group > .custom-file, .input-group > .custom-select, .input-group > .form-control, .input-group > .form-control-plaintext {
            position: relative;
            flex: 1 1 auto;
            width: 1%;
            min-width: 0;
            margin-bottom: 0;
        }
        .form-control {
            display: block;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        button, input {
            overflow: visible;
        }
        button, input, optgroup, select, textarea {
            margin: 0;
            font-family: inherit;
        }

        .btn:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
        .btn-primary {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }

        </style>
        <div class="input-group mb-3">
            <input type="text" id="searchElement" class="form-control" placeholder="Search for a Meal..." >
            <button id="searchButtonElement" class="btn btn-primary" type="button" id="button-addon2">Search</button>
        </div>
        `;
      
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
      
customElements.define("search-bar", SearchBar);