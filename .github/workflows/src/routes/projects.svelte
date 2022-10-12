<script lang="ts">
    let button: HTMLButtonElement;
    let userName: string;
    async function fetchType(name: string) {
        console.log(name);
        const response = await fetch(
            `https://api.agify.io?name=${name.toLowerCase()}`
        );
        const data = await response.json();
        printFact(data.age);
    }
    function start() {
        fetchType(userName);
    }
    let textField: HTMLElement;
    function printFact(age: string | null | undefined) {
        console.log(age);
        if (age === null) {
            document.querySelector("#fact")!.innerHTML = "Incorrect name, change smth";
        }
        else {
            document.querySelector("#fact")!.innerHTML = "Your age - " + age;
        }
        textField.style.visibility = "visible";
    }
</script>

<div>
    <div>
        <div class="box">
            <div>
                <input
                    id="name"
                    type="text"
                    bind:value={userName}
                    placeholder="Enter your name"
                />
                <button
                    type="submit"
                    bind:this={button}
                    on:click={start}
                    id="submitButton"
                >
                    Submit
                </button>
            </div>
            <div id="fact" bind:this={textField} />
        </div>
    </div>
</div>

<style>
    .box {
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 1%;
        padding-bottom: 1%;
        background-color: #2eaa53;
        border-radius: 15px;
        word-break: break-word;
        max-height: 700px;
        overflow: auto;
        text-align: center;
    }
    #fact {
        margin: 5% 10% 5% 10%;
        padding: 2% 2% 2% 2%;
        border-radius: 15px;
        visibility: hidden;
    }
    #name {
        color: black;
        padding: 3% 2% 3% 2%;
        height: 1rem;
        width: 50%;
    }
    #submitButton {
        width: 20%;
        color: black;
        margin-left: 3%;
        padding-left: 3%;
        padding-right: 3%;
    }
</style>