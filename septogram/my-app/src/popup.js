function PopUp() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          onClick={() => this.clicked()}
        >
          Click Me
        </button>
        {this.state.hide ? (
          <div
            class="modal fade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            Required PopUp{" "}
          </div>
        ) : null}
      </div>
    );
  }
}
export default PopUp;
