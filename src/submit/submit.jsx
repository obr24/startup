import React from 'react';

export function Submit() {
  return (
    <main>
            <div className="container mt-5 d-flex justify-content-center bp-5 mb-5">
                <div className="card p-4 shadow" style={{"width": "450px"}}>
                    <h4 className="text-center mb-4">Submit Recipe</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Recipe Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter the recipe title" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">URL</label>
                            <textarea className="form-control" id="url" rows="3"></textarea>
                        </div>
                        <div className="d-flex gap-2 justify-content-between">
                            <button type="submit" className="btn btn-primary flex-grow-1">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
  );
}