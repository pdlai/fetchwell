class Api::SessionsController < ApplicationController
  
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
      render json: ["Invalid username/password"], status: 401
      # @errors = 'Invalid username or password.'
      # render "api/users/show"
    else
    # Log them in and redirect them if we find them
      login(@user)
      # render json: "success login"
      render "api/users/show"
    end

  end

  # Might be Broken
  def destroy 
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else  
      render json: ["was not signed in"], status: 404
    end
  end

end
  