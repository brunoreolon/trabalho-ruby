class Api::V1::PublishersController < ApplicationController
    before_action :set_publisher, only: %i[ show update destroy ]
  
    # GET /publishers
    def index
      @publishers = Publisher.all
  
      render json: @publishers, include: [:books]
    end
  
    # GET /publishers/1
    def show
      render json: @publisher, include: [:books]
    end
  
    # POST /publishers
    def create
      @publisher = Publisher.new(publisher_params)
  
      if @publisher.save
        render json: @publisher, status: :created, location: api_v1_publisher_url(@publisher)
      else
        render json: @publisher.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /publishers/1
    def update
      if @publisher.update(publisher_params)
        render json: @publisher, include: [:books]
      else
        render json: @publisher.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /categories/1
    def destroy
      @publisher.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_publisher
        @publisher = Publisher.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def publisher_params
        params.require(:publisher).permit(:name)
      end
end