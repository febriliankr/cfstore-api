import { render } from "https://esm.sh/preact@10.7.2";
import { useState, useCallback } from "https://esm.sh/preact@10.7.2/hooks";
import { html } from "https://esm.sh/htm@3.0.4/preact";

const INITIAL_TODOS = [
  { text: "add HTM imports", done: true },
  { text: "remove bundler", done: true },
  { text: "write code", done: false },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  console.log(todos);

  const add = useCallback((e) => {
    const text = e.target.todo.value;
    setTodos((todos) => todos.concat({ text, done: false }));
  }, []);

  const updateTodo = useCallback((todo) => {
    // we update the todo in-place, so just invalidate the list to re-render:
    setTodos((todos) => todos.slice());
  }, []);

  

  return html`
    <div class="mx-auto max-w-5xl">
      <h1>Login First</h1>
      <${LoginForm} />
     
    </div>
  `;
}

function LoginForm() {
  function handleSubmit(e) {
    console.log(e);
  }

  return html`
  <form class="mt-8 space-y-6" action="/user/login" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="student_id" class="sr-only">Student ID</label>
          <input id="student_id" name="student_id" type="text" autocomplete="student_id" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Student ID">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>   
          Sign in
        </button>
      </div>
    </form>
  `;
}

render(html`<${App} />`, document.body);
