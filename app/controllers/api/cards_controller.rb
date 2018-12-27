class Api::CardsController < ApplicationController

  before_action :set_categories

  def index
    render json: @category.cards
  end

  def show
    render json: @card
  end

  def create
    card = @category.cards.new(card_params)
    if card.save
      render json: card
    else
      render json: card.errors
    end
  end
  
  def update
    if @card.update
      render json: @card
    else 
      render json: @card.errors
    end
  end

  def destroy
    @card.destroy
  end

  private
  def set_categories
    @category = Category.find(params[:category_id])
  end

  def set_card
    @card = @category.cards.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:question, :user_answer, :correct_answer)
  end

end
